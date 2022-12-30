import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { UserGroupList } from "./userGroup/UserGroupList";
import { UserGroupCreate } from "./userGroup/UserGroupCreate";
import { UserGroupEdit } from "./userGroup/UserGroupEdit";
import { UserGroupShow } from "./userGroup/UserGroupShow";
import { GroupList } from "./group/GroupList";
import { GroupCreate } from "./group/GroupCreate";
import { GroupEdit } from "./group/GroupEdit";
import { GroupShow } from "./group/GroupShow";
import { InstituteList } from "./institute/InstituteList";
import { InstituteCreate } from "./institute/InstituteCreate";
import { InstituteEdit } from "./institute/InstituteEdit";
import { InstituteShow } from "./institute/InstituteShow";
import { GraduationTypeList } from "./graduationType/GraduationTypeList";
import { GraduationTypeCreate } from "./graduationType/GraduationTypeCreate";
import { GraduationTypeEdit } from "./graduationType/GraduationTypeEdit";
import { GraduationTypeShow } from "./graduationType/GraduationTypeShow";
import { InstituteTypeList } from "./instituteType/InstituteTypeList";
import { InstituteTypeCreate } from "./instituteType/InstituteTypeCreate";
import { InstituteTypeEdit } from "./instituteType/InstituteTypeEdit";
import { InstituteTypeShow } from "./instituteType/InstituteTypeShow";
import { CountryList } from "./country/CountryList";
import { CountryCreate } from "./country/CountryCreate";
import { CountryEdit } from "./country/CountryEdit";
import { CountryShow } from "./country/CountryShow";
import { MArketProfileList } from "./mArketProfile/MArketProfileList";
import { MArketProfileCreate } from "./mArketProfile/MArketProfileCreate";
import { MArketProfileEdit } from "./mArketProfile/MArketProfileEdit";
import { MArketProfileShow } from "./mArketProfile/MArketProfileShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="UserGroup"
          list={UserGroupList}
          edit={UserGroupEdit}
          create={UserGroupCreate}
          show={UserGroupShow}
        />
        <Resource
          name="Group"
          list={GroupList}
          edit={GroupEdit}
          create={GroupCreate}
          show={GroupShow}
        />
        <Resource
          name="Institute"
          list={InstituteList}
          edit={InstituteEdit}
          create={InstituteCreate}
          show={InstituteShow}
        />
        <Resource
          name="GraduationType"
          list={GraduationTypeList}
          edit={GraduationTypeEdit}
          create={GraduationTypeCreate}
          show={GraduationTypeShow}
        />
        <Resource
          name="InstituteType"
          list={InstituteTypeList}
          edit={InstituteTypeEdit}
          create={InstituteTypeCreate}
          show={InstituteTypeShow}
        />
        <Resource
          name="Country"
          list={CountryList}
          edit={CountryEdit}
          create={CountryCreate}
          show={CountryShow}
        />
        <Resource
          name="MArketProfile"
          list={MArketProfileList}
          edit={MArketProfileEdit}
          create={MArketProfileCreate}
          show={MArketProfileShow}
        />
      </Admin>
    </div>
  );
};

export default App;
