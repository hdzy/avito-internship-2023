import React, {FC} from 'react';
import {routes} from "../../routes/routes";
import {Route, Routes} from "react-router";
const AppRouter: FC = () => {
    return (
        <>
            <Routes>
                {routes.map(e =>
                    <Route key={e.path} path={e.path} element={<e.element/>}/>)}
            </Routes>
        </>

    );
};

export default AppRouter;
