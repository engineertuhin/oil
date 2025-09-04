import React, { useEffect, useRef, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Areas({ auth, data }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <h2 className="text-skin-header font-medium ">
                        Organography
                    </h2>{" "}
                    <p className="text-skin-sub-header text-xs">
                        {" "}
                        Home - Organography
                    </p>
                </>
            }
        >
            <div>
                <div className="card">
                    <table class="border-collapse border border-slate-400 w-full">
                        <thead>
                            <tr>
                                <th class="border border-slate-300 w-10 p-2">
                                    SR
                                </th>
                                <th class="border border-slate-300 ">Name</th>
                                <th class="border border-slate-300 ...">
                                    Designation
                                </th>
                                <th class="border border-slate-300 ...">
                                    Mobile Number
                                </th>
                                <th class="border border-slate-300 ...">
                                    Zone
                                </th>
                                <th class="border border-slate-300 ...">
                                    Area
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(data).map((item,index) => {
                                // Count how many times each zone appears in the current data
                                const zoneCount = {};
                                item[1].forEach((data) => {
                                    const zoneName = data.zone.name;
                                    zoneCount[zoneName] =
                                        (zoneCount[zoneName] || 0) + 1;
                                });

                                return item[1].map((data, key) => {
                                    const zoneName = data.zone.name;
                                    // Only show the zone name in the first row for each zone, with rowSpan
                                    const showZoneName =
                                        key ===
                                        item[1].findIndex(
                                            (d) => d.zone.name === zoneName
                                        );

                                    return (
                                        <tr key={key}>
                                            {key == 0 ?  <td className="border border-slate-300 text-center p-2">
                                                {index + 1}
                                            </td> :  <td className="border border-slate-300 text-center text-sm p-2">
                                                {key }
                                            </td> }
                                           
                                            <td className="border border-slate-300 p-2">
                                                {data.user.name}
                                            </td>
                                            <td className="border border-slate-300 p-2">
                                                {data.designation}
                                            </td>
                                            <td className="border border-slate-300 p-2">
                                                {data.number}
                                            </td>

                                            {showZoneName && (
                                                <td
                                                    rowSpan={
                                                        zoneCount[zoneName]
                                                    }
                                                    className="border border-slate-300 p-2"
                                                >
                                                    {zoneName}
                                                </td>
                                            )}

                                            <td className="border border-slate-300 p-2">
                                                {data.user.areas
                                                    .map((item) => item.name)
                                                    .join(", ")}
                                            </td>
                                        </tr>
                                    );
                                });
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
