import React, { useEffect, useRef, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Toast } from "primereact/toast";
import DataTable from "@/Components/DataTable";
import { Column } from "primereact/column";
import Model from "@/Components/Model";
import { InputText } from "primereact/inputtext";
import { useForm, Controller, useWatch } from "react-hook-form";
import { classNames } from "primereact/utils";
import { Button } from "primereact/button";
import { useClient } from "@/Hooks/useClient";
import { getFormErrorMessage } from "@/Components/getFormErrorMessage";

import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { InputTextarea } from "primereact/inputtextarea";
export default function Client({ auth, initialData }) {
    const toast = useRef(null);
    const [model, setModel] = useState(false);
    const [preview, setPreview] = useState(false);
    const {
        client,
        gender,
        type,
        designation,
        district,
        getDistrict,
        area,
        getArea,
        zone,
        handleSave,
        handleDelete,
        zoneWise,
        users,
        code,
        resetForm,
    } = useClient(initialData, toast);
    const {
        control,
        formState: { errors },
        handleSubmit,
        reset,
        watch,
        setValue,
    } = useForm({});

    // Active button
    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                    icon="pi pi-pencil "
                    className="p-button-rounded  mr-2 p-button-sm h-10 w-10"
                    onClick={() => {
                        getArea(rowData?.district_id);
                        getDistrict(rowData?.zone_id);

                        reset({
                            name: rowData.name || "",
                            code: rowData.code || "",
                            number: rowData.number || "",
                            id: rowData.id || "",
                            nid: rowData.nid || "",
                            store_name: rowData.store_name || "",
                            store_representative:
                                rowData.store_representative || "",
                            user_id: Number(rowData.user_id) || "",
                            gender: rowData.gender || "",
                            type:
                                rowData.client_hierarchies_attach.map(
                                    (item) => item.id
                                ) || "",
                            district_id: rowData.district_id || "",
                            area_id: Number(rowData.area_id) || "",
                            zone_id: rowData.zone_id || "",
                            profile_picture: rowData.profile_picture || "",
                            address: rowData.address,
                        });
                        setPreview(false);
                        setModel(true);
                    }}
                />
                <Button
                    icon="pi pi-trash"
                    className="p-button-rounded p-button-warning p-button-sm h-10 w-10"
                    onClick={() => {
                        dataDelete(rowData.id);
                    }}
                />
            </React.Fragment>
        );
    };
    // Delete
    const dataDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this?")) return;
        let newCode = await handleDelete(id);
        reset(resetForm({ code: newCode }));
    };

    // Insert or Update
    const onSubmit = async (data) => {
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }

        let newCode = await handleSave(formData);

        if (!data.id) {
            reset(resetForm({ code: newCode }));
            setPreview(false);
        }
    };
    // user option
    const userOptionTemplate = (option) => {
        return (
            <div className="country-item">
                <div className="flex items-center gap-2 text-sm">
                    <h2>{option.name}</h2>
                    <span>({option.designation.code})</span>
                </div>
                <p className="text-xs text-black text-opacity-35">{option.designation.employ_hierarchy.name}</p>
            </div>
        );
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <h2 className="text-skin-header font-medium ">Client</h2>{" "}
                    <p className="text-skin-sub-header text-xs">
                        {" "}
                        Home - Client
                    </p>
                </>
            }
        >
            <div>
                <Toast
                    ref={toast}
                    className="p-toast p-toast-sm text-sm p-2 rounded-md "
                />
                <div className="card">
                    <DataTable
                        data={client}
                        addbuttom="Add Client"
                        model={() => {
                            setModel(true);
                            reset(resetForm({ code: code }));
                        }}
                        // model={setModel}
                    >
                        <Column
                            field="name"
                            header="Name"
                            alignHeader="center"
                            style={{ width: "14rem" }}
                        ></Column>
                        <Column
                            field="type"
                            alignHeader="center"
                            header="Type"
                            body={(item) => {
                                return item?.client_hierarchies_attach
                                    ?.map((data) => {
                                        return data.name;
                                    })
                                    .join(", ");
                            }}
                            bodyClassName="text-center"
                            style={{ width: "14rem" }}
                        ></Column>
                        <Column
                            bodyClassName="text-center"
                            body={() => {
                                return "Active";
                            }}
                            alignHeader="center"
                            header="Status"
                            style={{ width: "14rem" }}
                        ></Column>
                        <Column
                            bodyClassName="text-center"
                            body={actionBodyTemplate}
                            header="Action"
                            style={{ width: "14rem" }}
                        ></Column>
                    </DataTable>
                </div>
                <Model
                    style={{ width: "62rem" }}
                    breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                    model={model}
                    setModel={setModel}
                    title="Client Add"
                    resetData={() => {
                        resetForm({code:code})
                        setPreview(false);
                    }}
                >
                    <form
                        id="fromSubmit"
                        onSubmit={handleSubmit(onSubmit)}
                        className="p-fluid"
                    >
                        <div className="mt-5 grid grid-cols-12 gap-6">
                            {/* Image Preview Section */}
                            <div className="col-span-12 mb-4 flex justify-center">
                                <div className="w-40 h-40 border-2 border border-gray-300 rounded-full flex justify-center items-center">
                                    <Controller
                                        name="profile_picture"
                                        control={control}
                                        render={({ field, fieldState }) => (
                                            <div className="relative w-full h-full flex justify-center items-center">
                                                {/* Image Preview */}
                                                {watch("profile_picture") ? (
                                                    <img
                                                        id="preview_url"
                                                        src={
                                                            preview
                                                                ? preview
                                                                : window
                                                                      .location
                                                                      .origin +
                                                                  `/images/${watch(
                                                                      "profile_picture"
                                                                  )}`
                                                        }
                                                        alt="Profile"
                                                        className="w-full h-full object-cover rounded-full"
                                                    />
                                                ) : (
                                                    <span className="text-gray-500">
                                                        No Image Selected
                                                    </span>
                                                )}
                                                <input
                                                    className="absolute inset-0 opacity-0"
                                                    type="file"
                                                    id={field.name}
                                                    onChange={(e) => {
                                                        const file =
                                                            e.target.files[0];
                                                        field.onChange(file);
                                                        const preview =
                                                            document.getElementById(
                                                                "preview_url"
                                                            );

                                                        setPreview(
                                                            URL.createObjectURL(
                                                                file
                                                            )
                                                        );
                                                    }}
                                                    accept="image/*"
                                                />
                                            </div>
                                        )}
                                    />
                                </div>
                            </div>

                            {/* Name Field */}
                            <div className="field col-span-4">
                                <span className="p-float-label">
                                    <Controller
                                        name="name"
                                        control={control}
                                        rules={{
                                            required: "Name is required.",
                                        }}
                                        render={({ field, fieldState }) => (
                                            <InputText
                                                id={field.name}
                                                {...field}
                                                autoFocus
                                                className={classNames({
                                                    "p-invalid":
                                                        fieldState.invalid,
                                                })}
                                            />
                                        )}
                                    />
                                    <label
                                        htmlFor="name"
                                        className={classNames({
                                            "p-error": errors.name,
                                        })}
                                    >
                                        Name*
                                    </label>
                                </span>
                                {getFormErrorMessage(errors, "name")}
                            </div>

                            {/* Code Field */}
                            <div className="field col-span-4">
                                <span className="p-float-label">
                                    <Controller
                                        name="code"
                                        control={control}
                                        rules={{
                                            required: "Code is required.",
                                        }}
                                        render={({ field, fieldState }) => (
                                            <InputText
                                                readOnly={true}
                                                id={field.name}
                                                {...field}
                                                className={classNames({
                                                    "p-invalid":
                                                        fieldState.invalid,
                                                })}
                                            />
                                        )}
                                    />
                                    <label
                                        htmlFor="code"
                                        className={classNames({
                                            "p-error": errors.code,
                                        })}
                                    >
                                        Code
                                    </label>
                                </span>
                                {getFormErrorMessage(errors, "code")}
                            </div>

                            {/* Number Field */}
                            <div className="field col-span-4">
                                <span className="p-float-label">
                                    <Controller
                                        name="number"
                                        control={control}
                                        rules={{
                                            required: "Number is required.",
                                        }}
                                        render={({ field, fieldState }) => (
                                            <InputText
                                                id={field.name}
                                                {...field}
                                                className={classNames({
                                                    "p-invalid":
                                                        fieldState.invalid,
                                                })}
                                            />
                                        )}
                                    />
                                    <label
                                        htmlFor="number"
                                        className={classNames({
                                            "p-error": errors.number,
                                        })}
                                    >
                                        Phone Number*
                                    </label>
                                </span>
                                {getFormErrorMessage(errors, "number")}
                            </div>

                            {/* NID Field */}
                            <div className="field col-span-4">
                                <span className="p-float-label">
                                    <Controller
                                        name="nid"
                                        control={control}
                                        render={({ field, fieldState }) => (
                                            <InputText
                                                id={field.name}
                                                {...field}
                                                className={classNames({
                                                    "p-invalid":
                                                        fieldState.invalid,
                                                })}
                                            />
                                        )}
                                    />
                                    <label
                                        htmlFor="nid"
                                        className={classNames({
                                            "p-error": errors.nid,
                                        })}
                                    >
                                        NID
                                    </label>
                                </span>
                                {getFormErrorMessage(errors, "nid")}
                            </div>

                            {/* Gender Field */}
                            <div className="field col-span-4">
                                <span className="p-float-label">
                                    <Controller
                                        name="gender"
                                        control={control}
                                        rules={{
                                            required: "Gender is required.",
                                        }}
                                        render={({ field, fieldState }) => (
                                            <Dropdown
                                                options={gender}
                                                {...field}
                                                optionLabel="name"
                                                filter
                                                showClear
                                                filterBy="name"
                                                placeholder="Select a Gender"
                                            />
                                        )}
                                    />
                                    <label
                                        htmlFor="gender"
                                        className={classNames({
                                            "p-error": errors.gender,
                                        })}
                                    >
                                        Gender*
                                    </label>
                                </span>
                                {getFormErrorMessage(errors, "gender")}
                            </div>

                            {/* Store Field */}
                            <div className="field col-span-4">
                                <span className="p-float-label">
                                    <Controller
                                        name="store_name"
                                        control={control}
                                        render={({ field, fieldState }) => (
                                            <InputText
                                                id={field.name}
                                                {...field}
                                                className={classNames({
                                                    "p-invalid":
                                                        fieldState.invalid,
                                                })}
                                            />
                                        )}
                                    />
                                    <label
                                        htmlFor="store"
                                        className={classNames({
                                            "p-error": errors.nid,
                                        })}
                                    >
                                        Store Name
                                    </label>
                                </span>
                                {getFormErrorMessage(errors, "store_name")}
                            </div>

                            {/* Store representative Field */}
                            <div className="field col-span-4">
                                <span className="p-float-label">
                                    <Controller
                                        name="store_representative"
                                        control={control}
                                        render={({ field, fieldState }) => (
                                            <InputText
                                                id={field.name}
                                                {...field}
                                                className={classNames({
                                                    "p-invalid":
                                                        fieldState.invalid,
                                                })}
                                            />
                                        )}
                                    />
                                    <label
                                        htmlFor="store_representative"
                                        className={classNames({
                                            "p-error": errors.nid,
                                        })}
                                    >
                                        Store representative
                                    </label>
                                </span>
                                {getFormErrorMessage(
                                    errors,
                                    "store_representative"
                                )}
                            </div>

                            {/* type Field */}
                            <div className="field col-span-4">
                                <span className="p-float-label">
                                    <Controller
                                        name="type"
                                        control={control}
                                        rules={{
                                            required: "type is required.",
                                        }}
                                        render={({ field, fieldState }) => (
                                            <MultiSelect
                                                options={type}
                                                {...field}
                                                optionLabel="name"
                                                optionValue="id"
                                                filter
                                                maxSelectedLabels={2}
                                                placeholder="Select a type"
                                            />
                                        )}
                                    />
                                    <label
                                        htmlFor="type"
                                        className={classNames({
                                            "p-error": errors.type,
                                        })}
                                    >
                                        Type*
                                    </label>
                                </span>
                                {getFormErrorMessage(errors, "type")}
                            </div>

                            {/* User Field */}
                            <div className="field col-span-4">
                                <span className="p-float-label">
                                    <Controller
                                        name="user_id"
                                        control={control}
                                        rules={{
                                            required: "User is required.",
                                        }}
                                        render={({ field, fieldState }) => (
                                            <Dropdown
                                                options={users}
                                                value={field.value}
                                                onChange={(e) => {
                                                    field.onChange(e.value);
                                                }}
                                                optionLabel="name"
                                                optionValue="id"
                                                filter
                                                showClear
                                                filterBy="name"
                                                placeholder="Select a User"
                                                itemTemplate={userOptionTemplate}
                                            />
                                        )}
                                    />
                                    <label
                                        htmlFor="user"
                                        className={classNames({
                                            "p-error": errors.zone_id,
                                        })}
                                    >
                                        User *
                                    </label>
                                </span>
                                {getFormErrorMessage(errors, "user_id")}
                            </div>

                            {/*area  Field */}
                            <div className="field col-span-4">
                                <span className="p-float-label">
                                    <Controller
                                        name="zone_id"
                                        control={control}
                                        rules={{
                                            required: "Area is required.",
                                        }}
                                        render={({ field, fieldState }) => (
                                            <Dropdown
                                                value={field.value}
                                                options={zone}
                                                onChange={(e) => {
                                                    field.onChange(e.value);
                                                    setValue("district_id", []);
                                                    setValue("area_id", []);
                                                    getDistrict(e.value);
                                                }}
                                                maxSelectedLabels={2}
                                                optionLabel="name"
                                                optionValue="id"
                                                filter
                                            />
                                        )}
                                    />
                                    <label
                                        htmlFor="zone_id"
                                        className={classNames({
                                            "p-error": errors.area_id,
                                        })}
                                    >
                                        Zone *
                                    </label>
                                </span>
                                {getFormErrorMessage(errors, "zone_id")}
                            </div>
                            {/* District Field */}
                            <div className="field col-span-4">
                                <span className="p-float-label">
                                    <Controller
                                        name="district_id"
                                        control={control}
                                        rules={{
                                            required: "District is required.",
                                        }}
                                        render={({ field, fieldState }) => (
                                            <Dropdown
                                                options={district}
                                                value={field.value}
                                                onChange={(e) => {
                                                    field.onChange(e.value);
                                                    setValue("area_id", []);
                                                    getArea(e.value);
                                                }}
                                                optionLabel="name"
                                                optionValue="id"
                                                filter
                                                showClear
                                                filterBy="name,id"
                                                placeholder="Select a District"
                                            />
                                        )}
                                    />
                                    <label
                                        htmlFor="district_id"
                                        className={classNames({
                                            "p-error": errors.district_id,
                                        })}
                                    >
                                        District*
                                    </label>
                                </span>
                                {getFormErrorMessage(errors, "district_id")}
                            </div>

                            {/* Area Field */}
                            <div className="field col-span-4">
                                <span className="p-float-label">
                                    <Controller
                                        name="area_id"
                                        control={control}
                                        render={({ field, fieldState }) => (
                                            <Dropdown
                                                options={area}
                                                value={field.value}
                                                onChange={(e) => {
                                                    field.onChange(e.value);
                                                }}
                                                optionLabel="name"
                                                optionValue="id"
                                                filter
                                                showClear
                                                filterBy="name"
                                                placeholder="Select a District"
                                            />
                                        )}
                                    />
                                    <label
                                        htmlFor="area_id"
                                        className={classNames({
                                            "p-error": errors.zone_id,
                                        })}
                                    >
                                        Area
                                    </label>
                                </span>
                                {getFormErrorMessage(errors, "area_id")}
                            </div>
                            {/* Address Field */}
                            <div className="field col-span-12">
                                <span className="p-float-label">
                                    <Controller
                                        name="address"
                                        control={control}
                                        render={({ field, fieldState }) => (
                                            <InputTextarea
                                                rows={3}
                                                {...field}
                                            />
                                        )}
                                    />
                                    <label
                                        htmlFor="address"
                                        className={classNames({
                                            "p-error": errors.zone_id,
                                        })}
                                    >
                                        Address
                                    </label>
                                </span>
                                {getFormErrorMessage(errors, "address")}
                            </div>
                        </div>
                    </form>
                </Model>
            </div>
        </AuthenticatedLayout>
    );
}
