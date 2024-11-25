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
export default function Zone({ auth, getData, districts }) {
    const toast = useRef(null);
    const [model, setModel] = useState(false);
    const [data, setData] = useState(getData);

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

    const getFormErrorMessage = (name) => {
        return (
            errors[name] && (
                <small className="p-error">{errors[name].message}</small>
            )
        );
    };

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
    const dataDelete = (id) => {
        if (!confirm("Are you sure you want to delete this?")) return;

        axios.delete(route("zone.destroy", id)).then((res) => {
            setData(res.data.data);
            toast.current.show({
                severity: "info",
                summary: "Confirmed",
                detail: res.data.message,
                life: 3000,
            });
        });
    };

    // Insert or Update
    const onSubmit = (data) => {
        axios.post(route("zone.store"), data).then((res) => {
            setData(res.data.data);
            if (!data.id) {
                reset({
                    name: "",
                    code: "",
                    id: "",
                });
            }
            toast.current.show({
                severity: "info",
                summary: "Confirmed",
                detail: res.data.message,
                life: 3000,
            });
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <h2 className="text-skin-header font-medium ">zone</h2>{" "}
                    <p className="text-skin-sub-header text-xs"> Home - zone</p>
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
                        data={data}
                        addbuttom="Add zone"
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
                    style={{ width: "32rem" }}
                    breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                    model={model}
                    setModel={setModel}
                    title="zone Add"
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
                                {getFormErrorMessage("name")}
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
                                {getFormErrorMessage("code")}
                            </div>
                        </div>
                    </form>
                </Model>
            </div>
        </AuthenticatedLayout>
    );
}
