import CardStatus from "../../components/Dashborad/Cardstatus/CardStatus"
export default function StatusPage() {
  return (
    <section className="py-4">
      <div className="container">
        <div className="row g-4">

          <div className="col-12 col-md-3">
            <CardStatus
              icon="fa-solid fa-building"
              counter="120"
              text="Projects"
            />
          </div>

          <div className="col-12 col-md-3">
            <CardStatus
              icon="fa-solid fa-users"
              counter="80"
              text="Developers"
            />
          </div>

          <div className="col-12 col-md-3">
            <CardStatus
              icon="fa-solid fa-code"
              counter="150"
              text="Tasks"
            />
          </div>

          <div className="col-12 col-md-3">
            <CardStatus
              icon="fa-solid fa-check"
              counter="95"
              text="Completed"
            />
          </div>

        </div>
      </div>
    </section>
  );
}