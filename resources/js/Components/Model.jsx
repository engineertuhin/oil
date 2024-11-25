import React from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
export default function Model({
    model,
    setModel,
    title,
    style,
    children,
    resetData,
}) {
    const productDialogFooter = (
        <React.Fragment>
            <Button
                label="Cancel"
                icon="pi pi-times"
                className="p-button-sm"
                outlined
                onClick={() => {
                    setModel(false);
                    resetData();
                }}
            />
            <Button
                label="Save"
                icon="pi pi-check"
                className="p-button-sm"
                onClick={(e) => {
                    e.preventDefault(); // Prevent default button behavior
                    document
                        .getElementById("fromSubmit")
                        .dispatchEvent(new Event("submit", { bubbles: true }));
                }}
            />
        </React.Fragment>
    );
    return (
        <Dialog
            visible={model}
            style={style}
            header={title}
            className="p-fluid"
            footer={productDialogFooter}
            onHide={() => {
                resetData();
                setModel(false);
         
            }}
        >
            {children}
        </Dialog>
    );
}
