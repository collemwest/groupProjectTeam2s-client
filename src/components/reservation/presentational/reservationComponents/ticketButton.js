import { useProvider } from "../../../../model";
import { addTicketAction, removeTicketAction } from "../../../../model/actions/action";

export const TicketButton = ({ children, add = false, subtract = false, type }) => {
  const [model, dispatch] = useProvider(["reservation.inputValues.numOfTickets"]);
  const handleClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (add && !subtract && model.numOfTickets[type] >= 0) dispatch(addTicketAction(type));
    if (subtract && !add && model.numOfTickets[type] > 0) dispatch(removeTicketAction(type));
  };
  return <button onClick={handleClick}>{children}</button>;
};