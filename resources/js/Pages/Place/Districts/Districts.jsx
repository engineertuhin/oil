import React, { useEffect, useRef, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Toast } from "primereact/toast";
import DataTable from "@/Components/DataTable";
import { Column } from "primereact/column";
import Model from "@/Components/Model";
import { InputText } from "primereact/inputtext";
import { useForm, Controller } from "react-hook-form";
import { classNames } from "primereact/utils";

import { Button } from "primereact/button";
import { useDistricts } from "@/Hooks/useDistricts";
import { Dropdown } from "primereact/dropdown";
import { getFormErrorMessage } from "@/Components/getFormErrorMessage";

export default function Districts({ auth, initialData }) {
    const toast = useRef(null);
    const [model, setModel] = useState(false);
    const { districts, handleSave, handleDelete,zone } = useDistricts(
        initialData,
        toast
    );
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
                            zone_id: Number(rowData.zone_id),
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
                    <h2 className="text-skin-header font-medium ">Districts</h2>{" "}
                    <p className="text-skin-sub-header text-xs">
                        {" "}
                        Home - Districts
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
                        data={districts}
                        addbuttom="Add District"
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
                            field="zone.name"
                            alignHeader="center"
                            header="Zone"
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
                    style={{ width: "32rem" }}
                    breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                    model={model}
                    setModel={setModel}
                    title="Districts Add"
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
                        <div className="mt-5 space-y-7">
                            <div className="field">
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
                            <div className="field">
                                <span className="p-float-label">
                                    <Controller
                                        name="code"
                                        control={control}
                                        rules={{
                                            required: "Code is required.",
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
                                        htmlFor="code"
                                        className={classNames({
                                            "p-error": errors.name,
                                        })}
                                    >
                                        Code*
                                    </label>
                                </span>
                                {getFormErrorMessage(errors, "code")}
                            </div>

                            <div className="field">
                                <span className="p-float-label">
                                    <Controller
                                        name="zone_id"
                                        control={control}
                                        rules={{
                                            required: "Zone is required.",
                                        }}
                                        render={({ field, fieldState }) => (
                                            <Dropdown
                                                options={zone}
                                                {...field}
                                                optionLabel="name"
                                                optionValue="id"
                                                filter
                                                showClear
                                                filterBy="name"
                                                placeholder="Select a Districts"
                                            />
                                        )}
                                    />
                                    <label
                                        htmlFor="zone_id"
                                        className={classNames({
                                            "p-error": errors.name,
                                        })}
                                    >
                                        Zone*
                                    </label>
                                </span>
                                {getFormErrorMessage("zone_id")}
                            </div>
                        </div>
                    </form>
                </Model>
            </div>
        </AuthenticatedLayout>
    );
}
