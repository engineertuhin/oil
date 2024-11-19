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
import { useUser } from "@/Hooks/useUser";
import { getFormErrorMessage } from "@/Components/getFormErrorMessage";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";

export default function User({ auth, initialData }) {
    const toast = useRef(null);
    const [model, setModel] = useState(false);
    const [preview, setPreview] = useState(false);
    const {
        user,
        gender,
        designation,
        district,
        getArea,
        area,
        getUpazila,
        upazila,
        handleSave,
        handleDelete,
    } = useUser(initialData, toast);
    const {
        control,
        formState: { errors },
        handleSubmit,
        reset,
        watch,
    } = useForm({});

    // Active button
    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                    icon="pi pi-pencil "
                    className="p-button-rounded  mr-2 p-button-sm h-10 w-10"
                    onClick={() => {
                        getArea(rowData?.designation?.district_id);
                        getUpazila(rowData?.designation?.area_id);
                        reset({
                            name: rowData.name || "",
                            code: rowData.code || "",
                            id: rowData.id || "",
                            email: rowData.email || "",
                            password: rowData.password || "",
                            nid: rowData.designation.nid || "",
                            date_of_birth:
                                new Date(rowData.designation.date_of_birth) ||
                                "",
                            join_date:
                                new Date(rowData.designation.date_of_birth) ||
                                "",
                            gender: rowData.designation.gender || "",
                            designation: rowData.designation.designation || "",
                            district_id: rowData.designation.district_id || "",
                            area_id: Number(rowData.designation.area_id) || "",
                            upazila_id: rowData.designation.upazila_id || "",
                            profile_picture: rowData.profile_picture || "",
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
        await handleDelete(id);
    };

    // Insert or Update
    const onSubmit = async (data) => {
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }

        await handleSave(formData);
        if (!data.id) {
            reset({
                name: "",
                code: "",
                id: "",
                email: "",
                password: "",
                nid: "",
                date_of_birth: "",
                join_date: "",
                gender: "",
                designation: "",
                district_id: "",
                area_id: "",
                upazila_id: "",
            });
            setPreview(false);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <h2 className="text-skin-header font-medium ">User</h2>{" "}
                    <p className="text-skin-sub-header text-xs"> Home - User</p>
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
                        data={user}
                        addbuttom="Add User"
                        model={setModel}
                    >
                        <Column
                            field="name"
                            header="Name"
                            alignHeader="center"
                            style={{ width: "14rem" }}
                        ></Column>
                        <Column
                            field="designation.designation"
                            alignHeader="center"
                            header="Designation"
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
                    title="User Add"
                    resetData={() => {
                        reset({
                            name: "",
                            code: "",
                            id: "",
                            email: "",
                            password: "",
                            nid: "",
                            date_of_birth: "",
                            join_date: "",
                            gender: "",
                            designation: "",
                            district_id: "",
                            area_id: "",
                            upazila_id: "",
                        });
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

                            {/* Email Field */}
                            <div className="field col-span-4">
                                <span className="p-float-label">
                                    <Controller
                                        name="email"
                                        control={control}
                                        rules={{
                                            required: "Email is required.",
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
                                        htmlFor="email"
                                        className={classNames({
                                            "p-error": errors.email,
                                        })}
                                    >
                                        Email*
                                    </label>
                                </span>
                                {getFormErrorMessage(errors, "email")}
                            </div>

                            {/* Password Field */}
                            <div className="field col-span-4">
                                <span className="p-float-label">
                                    <Controller
                                        name="password"
                                        rules={{
                                            min: {
                                                value: 4,
                                                message:
                                                    "Minimum need 4 characters",
                                            },
                                        }}
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
                                        htmlFor="password"
                                        className={classNames({
                                            "p-error": errors.password,
                                        })}
                                    >
                                        Password
                                    </label>
                                </span>
                                {getFormErrorMessage(errors, "password")}
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

                            {/* Date of Birth Field */}
                            <div className="field col-span-4">
                                <span className="p-float-label">
                                    <Controller
                                        name="date_of_birth"
                                        control={control}
                                        rules={{
                                            required:
                                                "Date of Birth is required.",
                                        }}
                                        render={({ field, fieldState }) => (
                                            <Calendar
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
                                        htmlFor="date_of_birth"
                                        className={classNames({
                                            "p-error": errors.date_of_birth,
                                        })}
                                    >
                                        Date of Birth*
                                    </label>
                                </span>
                                {getFormErrorMessage(errors, "date_of_birth")}
                            </div>

                            {/* Join Date Field */}
                            <div className="field col-span-4">
                                <span className="p-float-label">
                                    <Controller
                                        name="join_date"
                                        control={control}
                                        render={({ field, fieldState }) => (
                                            <Calendar
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
                                        htmlFor="join_date"
                                        className={classNames({
                                            "p-error": errors.join_date,
                                        })}
                                    >
                                        Join Date
                                    </label>
                                </span>
                                {getFormErrorMessage(errors, "join_date")}
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

                            {/* Designation Field */}
                            <div className="field col-span-4">
                                <span className="p-float-label">
                                    <Controller
                                        name="designation"
                                        control={control}
                                        rules={{
                                            required:
                                                "Designation is required.",
                                        }}
                                        render={({ field, fieldState }) => (
                                            <Dropdown
                                                options={designation}
                                                {...field}
                                                optionLabel="name"
                                                filter
                                                showClear
                                                filterBy="name"
                                                placeholder="Select a Designation"
                                            />
                                        )}
                                    />
                                    <label
                                        htmlFor="designation"
                                        className={classNames({
                                            "p-error": errors.designation,
                                        })}
                                    >
                                        Designation*
                                    </label>
                                </span>
                                {getFormErrorMessage(errors, "designation")}
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
                                                    getArea(e.value);
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
                                        rules={{
                                            required: "Area is required.",
                                        }}
                                        render={({ field, fieldState }) => (
                                            <Dropdown
                                                options={area}
                                                value={field.value}
                                                onChange={(e) =>
                                                    field.onChange(e.value)
                                                }
                                                optionLabel="name"
                                                optionValue="id"
                                                filter
                                                showClear
                                                filterBy="name"
                                                placeholder="Select an Area"
                                            />
                                        )}
                                    />
                                    <label
                                        htmlFor="area_id"
                                        className={classNames({
                                            "p-error": errors.area_id,
                                        })}
                                    >
                                        Area*
                                    </label>
                                </span>
                                {getFormErrorMessage(errors, "area_id")}
                            </div>

                            {/* Upazila Field */}
                            <div className="field col-span-4">
                                <span className="p-float-label">
                                    <Controller
                                        name="upazila_id"
                                        control={control}
                                        render={({ field, fieldState }) => (
                                            <Dropdown
                                                options={upazila}
                                                value={field.value}
                                                onChange={(e) =>
                                                    field.onChange(e.value)
                                                }
                                                optionLabel="name"
                                                optionValue="id"
                                                filter
                                                showClear
                                                filterBy="name"
                                                placeholder="Select an Upazila"
                                            />
                                        )}
                                    />
                                    <label
                                        htmlFor="upazila_id"
                                        className={classNames({
                                            "p-error": errors.upazila_id,
                                        })}
                                    >
                                        Upazila
                                    </label>
                                </span>
                                {getFormErrorMessage(errors, "upazila_id")}
                            </div>
                        </div>
                    </form>
                </Model>
            </div>
        </AuthenticatedLayout>
    );
}
