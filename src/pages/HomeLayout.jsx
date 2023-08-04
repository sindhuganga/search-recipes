import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  // useNavigation gives the state at which the page is , such as Loading, idle etc
  // If there is a delay in the fetch of the records while the page loads, we use the
  // state and give out the appropriate message to the user
  const navState = useNavigation();
  const isPageLoading = navState === "loading";

  return (
    <>
      <Navbar />
      <section className="page">
        {isPageLoading ? <div className="loading"></div> : <Outlet />}
      </section>
    </>
  );
};

export default HomeLayout;
