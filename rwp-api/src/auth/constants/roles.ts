export enum Role {
    SuperAdmin = 'SuperAdmin',
    Manufacturer = 'Manufacturer',
    Retailer = 'Retailer',
    Customer = 'Customer'
  }
  
  export type USER_TYPE = Role.SuperAdmin | Role.Manufacturer | Role.Retailer | Role.Customer
  