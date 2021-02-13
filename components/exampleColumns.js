export const columns = [
  {
    title: "№",
    dataIndex: "number",
    sorter: true,
    render: (number) => `${number.first} ${number.last}`,
  },
  {
    title: "Провайдер",
    dataIndex: "provider",
    sorter: true,
    render: (provider) => `${provider.first} ${provider.last}`,
  },
  {
    title: "Дата",
    dataIndex: "Date",
    sorter: true,
    render: (date) => `${date.first} ${date.last}`,
  },
  {
    title: "Работник",
    dataIndex: "employee",
  },
  {
    title: "Клиент",
    dataIndex: "client",
  },
  {
    title: "Адреса",
    dataIndex: "adress",
  },
  {
    title: "Статус",
    dataIndex: "state",
    sorter: true,
    render: (state) => `${state.first} ${state.last}`,
  },
  {
    title: "Тип оплаты",
    dataIndex: "payment",
    sorter: true,
    render: (payment) => `${payment.first} ${payment.last}`,
  },
  {
    title: "Услуга",
    dataIndex: "service",
  },
  {
    title: "Тип услуги",
    dataIndex: "typeOfService",
  },
  {
    title: "Тариф",
    dataIndex: "rate",
  },
  {
    title: "Коннектор",
    dataIndex: "connector",
  },
  {
    title: "Комиссия",
    dataIndex: "commision",
    sorter: true,
    render: (commision) => `${commision.first} ${commision.last}`,
  },
  {
    title: "Скидка",
    dataIndex: "sale",
    sorter: true,
    render: (sale) => `${sale.first} ${sale.last}`,
  },
  {
    title: "Кэшбек",
    dataIndex: "cacheback",
    sorter: true,
    render: (cacheback) => `${cacheback.first} ${cacheback.last}`,
  },
  {
    title: "Полная стоимость",
    dataIndex: "fullPrice",
    sorter: true,
    render: (fullPrice) => `${fullPrice.first} ${fullPrice.last}`,
  },
  {
    title: "Стоимость",
    dataIndex: "price",
    sorter: true,
    render: (price) => `${price.first} ${price.last}`,
  },
];
