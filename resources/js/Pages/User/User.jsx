import React, { useEffect, useRef, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Toast } from "primereact/toast";
import DataTable from "@/Components/DataTable";
import { Column } from "primereact/column";
import Model from "@/Components/Model";
import { InputText } from "primereact/inputtext";
import { useForm, Controller } from "react-hook-form";
import { classNames } from "primereact/utils";
import axios from "axios";
import { Button } from "primereact/button";
import { useUser } from "@/Hooks/useUser";
import { getFormErrorMessage } from "@/Components/getFormErrorMessage";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { FileUpload } from "primereact/fileupload";

export default function User({ auth, initialData }) {
    const toast = useRef(null);
    const [model, setModel] = useState(false);
    const {
        User,
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
    } = useForm({
        name: "",
        code: "",
        id: "",
    });

    // Active button
    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                    icon="pi pi-pencil "
                    className="p-button-rounded  mr-2 p-button-sm h-10 w-10"
                    onClick={() => {
                        reset({
                            name: rowData.name,
                            code: rowData.code,
                            id: rowData.id,
                        });
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
        await handleSave(data);
        if (!data.id) {
            reset({
                name: "",
                code: "",
                id: "",
            });
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
                        data={User}
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
                            field="code"
                            alignHeader="center"
                            header="Code"
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
                        });
                    }}
                >
                    <form
                        id="fromSubmit"
                        onSubmit={handleSubmit(onSubmit)}
                        className="p-fluid"
                    >
                        <div className="mt-5  grid grid-cols-12  gap-6">
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
                                                autoFocus
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
                                            "p-error": errors.name,
                                        })}
                                    >
                                        Email*
                                    </label>
                                </span>
                                {getFormErrorMessage(errors, "email")}
                            </div>
                            <div className="field col-span-4">
                                <span className="p-float-label">
                                    <Controller
                                        name="password"
                                        rules={{
                                            required: "Password is required.",
                                            min: {
                                                value : 4,
                                                message: 'Minimum need 4 character'
                                            }
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
                                            "p-error": errors.name,
                                        })}
                                    >
                                        Password
                                    </label>
                                </span>
                                {getFormErrorMessage(errors, "password")}
                            </div>
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
                                            "p-error": errors.name,
                                        })}
                                    >
                                        NID
                                    </label>
                                </span>
                                {getFormErrorMessage(errors, "nid")}
                            </div>
                        
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
                                            "p-error": errors.name,
                                        })}
                                    >
                                        Date of Birth *
                                    </label>
                                </span>
                                {getFormErrorMessage(errors, "date_of_birth")}
                            </div>
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
                                            "p-error": errors.name,
                                        })}
                                    >
                                        Join Date
                                    </label>
                                </span>
                             
                            </div>
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
                                        htmlFor="districts"
                                        className={classNames({
                                            "p-error": errors.name,
                                        })}
                                    >
                                        Gender*
                                    </label>
                                </span>
                                {getFormErrorMessage(errors,"gender")}
                            </div>
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
                                            "p-error": errors.name,
                                        })}
                                    >
                                        Designation*
                                    </label>
                                </span>
                                {getFormErrorMessage(errors,"designation")}
                            </div>

                            <div className="field col-span-4">
                                <span className="p-float-label">
                                    <Controller
                                        name="district_id"
                                        control={control}
                                        rules={{
                                            required: "Districts is required.",
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
                                            "p-error": errors.name,
                                        })}
                                    >
                                        District
                                    </label>
                                </span>
                                {getFormErrorMessage("district_id")}
                            </div>
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
                                                    getUpazila(e.value);
                                                }}
                                                optionLabel="name"
                                                filter
                                                showClear
                                                filterBy="name"
                                                placeholder="Select a Districts"
                                            />
                                        )}
                                    />
                                    <label
                                        htmlFor="area_id"
                                        className={classNames({
                                            "p-error": errors.name,
                                        })}
                                    >
                                        Area
                                    </label>
                                </span>
                                {getFormErrorMessage("area_id")}
                            </div>
                            <div className="field col-span-4">
                                <span className="p-float-label">
                                    <Controller
                                        name="upazila_id"
                                        control={control}
                                        render={({ field, fieldState }) => (
                                            <Dropdown
                                                options={upazila}
                                                {...field}
                                                optionLabel="name"
                                                optionValue="id"
                                                filter
                                                showClear
                                                filterBy="name"
                                                placeholder="Select a Upazila"
                                            />
                                        )}
                                    />
                                    <label
                                        htmlFor="upazila_id"
                                        className={classNames({
                                            "p-error": errors.name,
                                        })}
                                    >
                                        Upazila
                                    </label>
                                </span>
                                {getFormErrorMessage("upazila_id")}
                            </div>

                            <div className="col-span-4 flex items-center  ">
                                <Controller
                                    name="profile_picture"
                                    control={control}
                                    rules={{
                                        required: "Email is required.",
                                    }}
                                    render={({ field, fieldState }) => (
                                        <input
                                            className=" w-full"
                                            type="file"
                                            id={field.name}
                                            {...field}
                                            
                                           
                                        />
                                    )}
                                />
                            </div>
                        </div>
                    </form>
                </Model>
            </div>
        </AuthenticatedLayout>
    );
}
