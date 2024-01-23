import styles from "./page.module.css";
import Games from "./components/games"

async function getData() {
  const res = await fetch(
    "https://github.com/spinbet/fe-interview-test/blob/master/data/sports.json"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Home = async () => {
  const data = await getData();
  const {
    payload: {
      blob: { rawLines },
    },
  } = data;

  const parsedData = JSON.parse(rawLines.join(""));

  return (
      <main className={styles.main}>
          <Games games={parsedData}/>
      </main>
  );
}

export default Home;