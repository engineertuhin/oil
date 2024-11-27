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
import { getFormErrorMessage } from "@/Components/getFormErrorMessage";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { useGarage } from "@/Hooks/useGarage";
import { Calendar } from "primereact/calendar";

export default function Garage({ auth, initialData }) {
    const toast = useRef(null);
    const [model, setModel] = useState(false);
    const {
        garage,
        handleSave,
        handleDelete,
        setCode,
        code,
        resetForm,
        client,
        setClient,
        garage_type,
    } = useGarage(initialData, toast);

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
                        reset({
                            garage_name: rowData.garage_name || "",
                            proprietor_name: rowData.proprietor_name || "",
                            code: rowData.code || "",
                            number: rowData.number || "",
                            client_id: Number(rowData.client_id) || "",
                            garage_type_id: Number(rowData.garage_type_id) || "",
                            address: rowData.address || "",
                            anniversary_date: new Date(rowData.anniversary_date) || "",
                            date_of_birth: new Date(rowData.date_of_birth) || "",
                            id: rowData.id || "",
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
        let newCode = await handleDelete(id);
        setCode(newCode);
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
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <h2 className="text-skin-header font-medium ">Garage</h2>{" "}
                    <p className="text-skin-sub-header text-xs">
                        {" "}
                        Home - Garage{" "}
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
                        data={garage}
                        addbuttom="Add garage"
                        model={() => {
                            setModel(true);
                            reset(resetForm({ code: code }));
                        }}
                    >
                        <Column
                            field="name"
                            header="Name"
                            body={(item) => {
                                return item.mechanic_name + ` (${item.code})`;
                            }}
                            alignHeader="center"
                            style={{ width: "14rem" }}
                        ></Column>
                        <Column
                            bodyClassName="text-center"
                            field="number"
                            alignHeader="center"
                            header="Number"
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
                        reset(resetForm({ code: code }));
                    }}
                >
                    <form
                        id="fromSubmit"
                        onSubmit={handleSubmit(onSubmit)}
                        className="p-fluid"
                    >
                        <div className="mt-5 grid grid-cols-12 gap-6">
                            {/* Name Field */}
                            <div className="field col-span-4">
                                <span className="p-float-label">
                                    <Controller
                                        name="garage_name"
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
                                        htmlFor="garage_name"
                                        className={classNames({
                                            "p-error": errors.name,
                                        })}
                                    >
                                        Garage name*
                                    </label>
                                </span>
                                {getFormErrorMessage(errors, "garage_name")}
                            </div>
                             {/* Name Field */}
                             <div className="field col-span-4">
                                <span className="p-float-label">
                                    <Controller
                                        name="proprietor_name"
                                        control={control}
                                       
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
                                        htmlFor="proprietor_name"
                                        className={classNames({
                                            "p-error": errors.name,
                                        })}
                                    >
                                        Proprietor name
                                    </label>
                                </span>
                                {getFormErrorMessage(errors, "proprietor_name")}
                            </div>

                            {/* Code Field */}
                            <div className="field col-span-4">
                                <span className="p-float-label">
                                    <Controller
                                        name="code"
                                        control={control}
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
                                            "p-error": errors.code,
                                        })}
                                    >
                                        Phone Number
                                    </label>
                                </span>
                                {getFormErrorMessage(errors, "number")}
                            </div>
                            {/* Date of birth field */}
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
                            {/* Date of birth field */}
                            <div className="field col-span-4">
                                <span className="p-float-label">
                                    <Controller
                                        name="anniversary_date"
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
                                        htmlFor="anniversary_date"
                                        className={classNames({
                                            "p-error": errors.anniversary_date,
                                        })}
                                    >
                                        Anniversary date
                                    </label>
                                </span>
                                {getFormErrorMessage(
                                    errors,
                                    "anniversary_date"
                                )}
                            </div>

                            {/* Client Field */}
                            <div className="field col-span-4">
                                <span className="p-float-label">
                                    <Controller
                                        name="client_id"
                                        control={control}
                                        rules={{
                                            required: "Client is required.",
                                        }}
                                        render={({ field, fieldState }) => (
                                            <Dropdown
                                                options={client}
                                                {...field}
                                                optionLabel="name"
                                                optionValue="id"
                                                filter
                                                showClear
                                                filterBy="name"
                                                placeholder="Select a Client"
                                            />
                                        )}
                                    />
                                    <label
                                        htmlFor="control"
                                        className={classNames({
                                            "p-error": errors.gender,
                                        })}
                                    >
                                        Client *
                                    </label>
                                </span>
                                {getFormErrorMessage(errors, "client_id")}
                            </div>
                            {/* Garage Field */}
                            <div className="field col-span-4">
                                <span className="p-float-label">
                                    <Controller
                                        name="garage_type_id"
                                        control={control}
                                        rules={{
                                            required: "Garage is required.",
                                        }}
                                        render={({ field, fieldState }) => (
                                            <Dropdown
                                                options={garage_type.current}
                                                {...field}
                                                optionLabel="name"
                                                optionValue="id"
                                                filter
                                                showClear
                                                filterBy="name"
                                                placeholder="Select a Garage"
                                            />
                                        )}
                                    />
                                    <label
                                        htmlFor="control"
                                        className={classNames({
                                            "p-error": errors.gender,
                                        })}
                                    >
                                        Garage *
                                    </label>
                                </span>
                                {getFormErrorMessage(errors, "garage_id")}
                            </div>
                            {/* Gender Field */}
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
                                            "p-error": errors.gender,
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
