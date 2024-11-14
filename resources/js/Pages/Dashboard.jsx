import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Button } from 'primereact/button';     
export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<>
              <h2 className="text-skin-header font-medium ">Dashboard</h2>{" "}
                    <p className="text-skin-sub-header text-xs">
                        {" "}
                        Home - Dashboard
                    </p>
            </>}
        >

            <p className='text-sm'>Comming Soon....</p>
          
            <Button label="Submit" className='p-button-sm' />
        



         
        </AuthenticatedLayout>
    );
}
