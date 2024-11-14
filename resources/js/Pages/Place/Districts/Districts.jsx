import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
export default function Districts() {
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


            <p className="text-sm">Comming Soon....</p>

            
        </AuthenticatedLayout>
    );
}
