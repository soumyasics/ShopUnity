const express=require("express")
const Route=express.Router()

const CustomerController=require("../Controller/customerController")
const WholesaleController=require('../Controller/wholesaleDealerController')
const DeliveryAgentController=require("../Controller/DeliverAgentController")
const ShopeOwnerController=require('../Controller/shopOwnerController')


// wholesale
Route.post('/wholesale_register',WholesaleController.upload,WholesaleController.WholesaleDealerRegister)
Route.post('/wholesaledealer_login',WholesaleController.WholesaleDealerLogin)
Route.get('/get_all_wholesaledealer',WholesaleController.getAllWholesaleDealer)
Route.get('/get_a_wholesaledealer/:wholesaledealerid',WholesaleController.getAWholesaledealer)
Route.post('/edit_a_wholesaledealer/:wholesaledealerid',WholesaleController.EditAWholesaledealer)
Route.post('/delete_a_wholesaledealer/:wholesaledealerid',WholesaleController.DeleteAWholesaleDealer)
Route.post('/wholesaledealer_forgot',WholesaleController.wholesaleforgot)

Route.post('/wholesaledealer_acceptrequest/:id',WholesaleController.acceptwholesaledealer)
Route.post('/wholesaledealer_rejectrequest/:id',WholesaleController.rejecrWholesaledealer)

Route.post("/activatewholesale/:id",WholesaleController.activatewholesaleById)
Route.post("/inactivatewholesale/:id",WholesaleController.deActivatewholesaleById)

Route.get('/get_all_accepted_wholesaledealer',WholesaleController.getAllAcceptedWholesaleDealer)

// customer
Route.post("/customer_register",CustomerController.customerRegister)
Route.post('/customer_login',CustomerController.customerLogin)
Route.post('/customerforget',CustomerController.customerforget)
Route.get('/get_all_customers',CustomerController.getAllCustomers)
Route.get('/get_a_customer/:customerid',CustomerController.getACustomer)
Route.post('/edit_a_customer/:customerid',CustomerController.EditACustomer)
Route.post('/delete_a_customer/:customerid',CustomerController.DeleteACustomer)
Route.post('/diactivate_customer/:id',CustomerController.deActivateCustomer)
Route.post('/activate_customer/:id',CustomerController.activatecustomer)

// deliveryagent
Route.post('/delivery_agent_register',DeliveryAgentController.DeliveryAgentRegister)
Route.post('/delivery_agent_login',DeliveryAgentController.DeliveryagentLogin)
Route.get('/get_all_deliveryagents',DeliveryAgentController.getAllDeliveryAgents)
Route.get('/get_a_deliveryagent/:deliveryagentid',DeliveryAgentController.getADeliveryAgent)
Route.post('/edit_a_deliveryagent/:deliveryagentid',DeliveryAgentController.EditADeliveryAgent)
Route.post('/delete_a_deliveryagent/:deliveryagentid',DeliveryAgentController.DeleteDeliveryAgent)
Route.post('/delivery_agent_forgot',DeliveryAgentController.deliveryagentforget)


Route.post('/Deliveryagent_acceptrequest/:id',DeliveryAgentController.acceptDeliveryagent)
Route.post('/Deliveryagent_rejectrequest/:id',DeliveryAgentController.rejectDeliveryagent)

Route.post("/activateDeliveryagent/:id",DeliveryAgentController.activateDeliveryagentById)
Route.post("/inactivateDeliveryagent/:id",DeliveryAgentController.deActivateDeliveryagentById)

Route.get('/get_all_accepted_Deliveryagent',DeliveryAgentController.getAllAcceptedDeliveryAgents)

// shop ownerS
Route.post("/shopeowner_register",ShopeOwnerController.upload,ShopeOwnerController.shopeOwnerRegister)
Route.post('/shopowner_login',ShopeOwnerController.ShopeOwnerLogin)
Route.get('/get_all_shopowners',ShopeOwnerController.getAllShopOwners)
Route.get('/get_all_pending_shopowners',ShopeOwnerController.getAllPendingShopOwners)
Route.get('/get_a_shopowner/:shopownerid',ShopeOwnerController.getAshopowner)
Route.post('/edit_a_shopowner/:shopownerid',ShopeOwnerController.upload,ShopeOwnerController.EditAShopOwner)
Route.post('/delete_a_shopowner/:shopownerid',ShopeOwnerController.DeleteAShopOwner)
Route.post('/shopowner_forgot',ShopeOwnerController.Shopownerforgot)
Route.post("/acceptshopowner/:id",ShopeOwnerController.acceptShopOwner)
Route.post("/rejectshopowner/:id",ShopeOwnerController.rejectshopowner)

Route.post("/activateShopowner/:id",ShopeOwnerController.activateShopownerById)
Route.post("/inactivateshopowner/:id",ShopeOwnerController.deActivateShopOwnerById)



module.exports=Route