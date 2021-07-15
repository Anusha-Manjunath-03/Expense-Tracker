import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import bin from "../../bin.jfif";

function ExpenseItem(props) {

  const deleteHandler = ()=>{
    props.onDelete(props.id)
  }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">Rs.{props.amount}</div>
        <img src = {bin} alt = 'Remove' className = "image" onClick = {deleteHandler}/>
      </Card>
    </li>
  );
}

export default ExpenseItem;
