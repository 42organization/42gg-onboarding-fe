import AdminNavbar from 'components/AdminLayout/AdminNavbar';
import AdminUserInfo from 'components/AdminLayout/AdminUserInfo';
import { NextPage } from 'next';

const Admin: NextPage = () => {
  return (
    <>
      <AdminNavbar />
	  <AdminUserInfo />
    </>
  );
};

export default Admin;
