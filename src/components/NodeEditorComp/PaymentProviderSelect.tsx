import { useReactFlow } from "@xyflow/react";

const PAYMENT_PROVIDERS = [
  { code: "St", name: "Stripe" },
  { code: "Gp", name: "Google Pay" },
];

export default function PaymentProviderSelect() {
  const { setNodes } = useReactFlow();

  const onProviderClick = ({ name, code }: { name: string; code: string }) => {
    setNodes((prevNodes) => [
      ...prevNodes,
      {
        id: `${prevNodes.length + 1}`,
        data: { name, code },
        position: { x: 100, y: 100 },
        type: "paymentProvider",
      },
    ]);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCode = e.target.value;
    const selectedProvider = PAYMENT_PROVIDERS.find(
      (provider) => provider.code === selectedCode
    );
    if (selectedProvider) {
      onProviderClick(selectedProvider);
    }
  };

  return (
    <div className="bg-white p-2 rounded-lg shadow-md flex flex-col gap-2 z-50">
      <p>PaymentProviderSelect</p>
      <select onChange={handleSelectChange} defaultValue="">
        <option value="" disabled>
          Select a provider
        </option>
        {PAYMENT_PROVIDERS.map((provider) => (
          <option key={provider.code} value={provider.code}>
            {provider.name}
          </option>
        ))}
      </select>
    </div>
  );
}
