  import { Outlet } from "react-router-dom";
export default function DevelopersPage() {


  return (
    <section className="py-4">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center mb-4"> </div>
              <Outlet context={{ linkText: "add developer", tableHead: "Developers" }} />
        </div>
    </section>
  );
}