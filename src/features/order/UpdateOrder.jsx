import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }) {
  const feacher = useFetcher();

  return (
    <feacher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Piority</Button>
    </feacher.Form>
  );
}

export default UpdateOrder;

export const action = async ({ params }) => {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
};
