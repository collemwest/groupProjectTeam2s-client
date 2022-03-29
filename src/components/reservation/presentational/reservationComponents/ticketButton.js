import { useProvider } from "../../../../model";
import { addTicketAction, removeTicketAction } from "../../../../model";
import { ButtonForTickets } from "./styles";
export const TicketButton = ({ children, add = false, subtract = false, type, disabled }) => {
  const [model, dispatch] = useProvider(["reservation.inputValues.numOfTickets"]);
  const handleClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (add && !subtract && model.numOfTickets[type] >= 0) dispatch(addTicketAction(type));
    if (subtract && !add && model.numOfTickets[type] > 0) dispatch(removeTicketAction(type));
  };
  return (
    <ButtonForTickets disabled={disabled} onClick={handleClick}>
      {children}
    </ButtonForTickets>
  );
};
