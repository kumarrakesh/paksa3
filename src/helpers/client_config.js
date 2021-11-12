export const config = {
  instance: "default",
  currency: "NOK",
  MainRoutes: {
    SELECT_DEVICE: "select-device",
    EVALUATE_DEVICE: "evaluate-device",
    YOUR_DETAILS: "your-details",
    COMPLETE_SELL: "complete-sell",
  },
  SubRoutes: {
    SELECT_DEVICE: {
      SELECT_BRAND: "1",
      SELECT_MODEL: "2",
      CHOOSE_VARIANT: "3",
    },
    EVALUATE_DEVICE: {
      MOBILE_SWITCH_ON: "1",
      GLASS_DEFECTS: "2",
      PHYSICAL_PROBLEMS: "3",
    },
    YOUR_DETAILS: {
      CUSTOMER_DETAILS: "1",
    },
    COMPLETE_SELL: {
      CONFIRM_DETAILS: "1",
    },
  },
};
