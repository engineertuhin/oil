import React, { useRef, useState } from "react";
import { DataTable as Table } from "primereact/datatable";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

export default function DataTable({ children, data, addbuttom = false, model=false }) {
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const dt = useRef(null);

    const header = (
        <div className="flex justify-between w-full  ">
            <IconField iconPosition="left">
                <InputIcon
                    className="pi pi-search"
                    style={{ fontSize: "14px" }}
                />
                <InputText
                    type="search"
                    className="h-[40px]"
                    onInput={(e) => setGlobalFilter(e.target.value)}
                    placeholder="Search..."
                />
            </IconField>
            {addbuttom && (
                <Button
                    label={addbuttom}
                    icon="pi pi-plus"
                    className="h-[40px]  text-[12px] "
                    onClick={()=>{
                        model(true);
                    }}
                    size="small"
                />
            )}
        </div>
    );
    return (
        <Table
            style={{ fontSize: "15px" }}
            ref={dt}
            value={data}
            selection={selectedProducts}
            onSelectionChange={(e) => setSelectedProducts(e.value)}
            dataKey="id"
            paginator
            rows={10}
            showGridlines
            size="small"
            rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            globalFilter={globalFilter}
            header={header}
        >
            {children}
        </Table>
    );
}
