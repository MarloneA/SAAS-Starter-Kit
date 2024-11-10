'use server'

export const getUsers = async () => {
  try {
    const user = true
    if (user) {
      const clients = [{
        name: "droid"
      }]
      if (clients) {
        return clients
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getAllOrders() {
  return orders
}

export async function getOrderById(id: string) {

  if (id) {
    return orders.find(order => order.orderId === id)
  }
}

const orders = [
  {
    orderId: "Oe31b70H",
    name: "Liam Johnson",
    email: "liam@example.com",
    type: "Sale",
    status: "Fulfilled",
    date: "2023-06-23",
    amount: "$250.00",
    statusVariant: "secondary",
    orderDetails: [
      { item: "Glimmer Lamps", quantity: 2, price: "$250.00" },
      { item: "Aqua Filters", quantity: 1, price: "$49.00" },
    ],
    summary: {
      subtotal: "$299.00",
      shipping: "$5.00",
      tax: "$25.00",
      total: "$329.00",
    },
    shippingInfo: {
      name: "Liam Johnson",
      address: "1234 Main St.",
      city: "Anytown, CA 12345",
    },
    billingInfo: {
      sameAsShipping: true,
    },
    customerInfo: {
      customerName: "Liam Johnson",
      customerEmail: "liam@acme.com",
      phone: "+1 234 567 890",
    },
    paymentInfo: {
      method: "Visa",
      cardLastFour: "4532",
    },
    updated: "2023-11-23",
  },
  {
    orderId: "Oe31b70J",
    name: "Olivia Smith",
    email: "olivia@example.com",
    type: "Refund",
    status: "Declined",
    date: "2023-06-24",
    amount: "$150.00",
    statusVariant: "destructive",
    orderDetails: [{ item: "Aura Speakers", quantity: 1, price: "$150.00" }],
    summary: {
      subtotal: "$150.00",
      shipping: "$0.00",
      tax: "$0.00",
      total: "$150.00",
    },
    shippingInfo: {
      name: "Olivia Smith",
      address: "5678 Park Ave.",
      city: "Sampletown, TX 54321",
    },
    billingInfo: {
      sameAsShipping: true,
    },
    customerInfo: {
      customerName: "Olivia Smith",
      customerEmail: "olivia@sample.com",
      phone: "+1 345 678 901",
    },
    paymentInfo: {
      method: "MasterCard",
      cardLastFour: "1234",
    },
    updated: "2023-06-24",
  },
  {
    orderId: "Oe31b70K",
    name: "Noah Williams",
    email: "noah@example.com",
    type: "Subscription",
    status: "Fulfilled",
    date: "2023-06-25",
    amount: "$350.00",
    statusVariant: "secondary",
    orderDetails: [{ item: "Echo Devices", quantity: 3, price: "$350.00" }],
    summary: {
      subtotal: "$350.00",
      shipping: "$0.00",
      tax: "$30.00",
      total: "$380.00",
    },
    shippingInfo: {
      name: "Noah Williams",
      address: "9876 Market St.",
      city: "Somewhere, NY 67890",
    },
    billingInfo: {
      sameAsShipping: true,
    },
    customerInfo: {
      customerName: "Noah Williams",
      customerEmail: "noah@devices.com",
      phone: "+1 456 789 012",
    },
    paymentInfo: {
      method: "PayPal",
      cardLastFour: "N/A",
    },
    updated: "2023-06-25",
  },
  {
    orderId: "Oe31b70L",
    name: "Emma Brown",
    email: "emma@example.com",
    type: "Sale",
    status: "Fulfilled",
    date: "2023-06-26",
    amount: "$450.00",
    statusVariant: "secondary",
    orderDetails: [{ item: "Solar Panels", quantity: 1, price: "$450.00" }],
    summary: {
      subtotal: "$450.00",
      shipping: "$20.00",
      tax: "$35.00",
      total: "$505.00",
    },
    shippingInfo: {
      name: "Emma Brown",
      address: "1357 Green Blvd.",
      city: "Eco City, FL 24680",
    },
    billingInfo: {
      sameAsShipping: true,
    },
    customerInfo: {
      customerName: "Emma Brown",
      customerEmail: "emma@solar.com",
      phone: "+1 567 890 123",
    },
    paymentInfo: {
      method: "Visa",
      cardLastFour: "5678",
    },
    updated: "2023-06-26",
  },
];