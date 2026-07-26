import UrlForm from "../components/UrlForm";
import StatsCard from "../components/StatsCard";
import UrlTable from "../components/UrlTable";

import "../styles/home.css";


function Home(){


    return (

        <div className="home">

            <header>
                <h1>
                    URL Shortener
                </h1>
                <p>
                    Create and track your shortened links
                </p>
            </header>

            <UrlForm />

            <section className="dashboard">

                <h2>
                    Dashboard
                </h2>

                <div className="stats">
                    <StatsCard
                        title="Total Links"
                        value="24"
                    />

                    <StatsCard
                        title="Total Clicks"
                        value="3,540"
                    />
                </div>

                <UrlTable />

            </section>

        </div>
    );
}

export default Home;