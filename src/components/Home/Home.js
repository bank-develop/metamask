import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome, Your Are Connected With MetaMask !!</h1>
      <p><strong>You Wallet ID : </strong>{props.currentAccount}</p>
      <p><strong>You Balance Is:</strong> {props.balance} ETH</p>
    </Card>
  );
};
export default Home;
