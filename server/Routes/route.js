const express=require("express")
const Route=express.Router()

const CustomerController=require("../Controller/customerController")
const WholesaleController=require('../Controller/wholesaleDealerController')
const DeliveryAgentController=require("../Controller/DeliverAgentController")
const ShopeOwnerController=require('../Controller/shopOwnerController')
const productController=require("../Controller/productController")
const cartController=require("../Controller/cartController")
const orderController=require("../Controller/OrderController")
const deliveryRequestController = require("../Controller/deliveryRequestController");
const wholesaledealerproductcontroller=require("../Controller/WholesaleProductController")
const wholesaledealerCartcontroller =require("../Controller/WholesaledealerCartController")
const wholesaledealerordercontroller =require("../Controller/WholesaleorderController")
const wholesaledealerorderRequestcontroller =require("../Controller/WholesaledealerDeliveryRequestController")

// wholesale
Route.post('/wholesale_register',WholesaleController.upload,WholesaleController.WholesaleDealerRegister)
Route.post('/wholesaledealer_login',WholesaleController.WholesaleDealerLogin)
Route.get('/get_all_wholesaledealer',WholesaleController.getAllWholesaleDealer)
Route.get('/get_a_wholesaledealer/:wholesaledealerid',WholesaleController.getAWholesaledealer)
Route.post('/edit_a_wholesaledealer/:wholesaledealerid',WholesaleController.upload,WholesaleController.EditAWholesaledealer)
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
Route.post('/delivery_agent_register',DeliveryAgentController.upload,DeliveryAgentController.DeliveryAgentRegister)
Route.post('/delivery_agent_login',DeliveryAgentController.DeliveryagentLogin)
Route.get('/get_all_deliveryagents',DeliveryAgentController.getAllDeliveryAgents)
Route.get('/get_a_deliveryagent/:deliveryagentid',DeliveryAgentController.getADeliveryAgent)
Route.post('/edit_a_deliveryagent/:deliveryagentid',DeliveryAgentController.upload,DeliveryAgentController.EditADeliveryAgent)
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
Route.post("/assignDeliveryAgent",ShopeOwnerController.assignDeliveryAgent)

Route.post("/activateShopowner/:id",ShopeOwnerController.activateShopownerById)
Route.post("/inactivateshopowner/:id",ShopeOwnerController.deActivateShopOwnerById)


// product
Route.post("/add_a_product",productController.upload,productController.addProduct)
Route.post("/view_a_product/:productId",productController.viewProductById)
Route.post("/view_all_product",productController.viewAllProducts)
Route.post("/edit_a_product/:productId",productController.upload,productController.editProductById)
Route.post("/delete_a_product/:productId",productController.deleteProductById)

// cart
Route.post("/addtocart",cartController.addtocart)
Route.post("/viewCustomercart/:customerId",cartController.viewCartItems)
Route.post("/deleteitemfromcart",cartController.deleteFromCart)

// order
Route.post("/placeorder",orderController.placeOrder)
Route.post("/viewordersshopownerbyId/:shopOwnerId",orderController.viewOrdersByShopOwner)
Route.post("/acceptOrderRequest/:orderid",orderController.acceptOrderRequest)
Route.post("/viewOrdersByCustomerId/:customerId",orderController.viewOrdersByCustomerId)

// delivery requests

Route.get("/deliveryRequests/:agentId", deliveryRequestController.getDeliveryRequests);
Route.get("/deliveryRequestsbyshopowner/:shopid", deliveryRequestController.deliveryRequestsbyshopowner);
Route.post("/rejectdeliveryRequests/:requestId", deliveryRequestController.rejectDeliveryRequest);
Route.post("/acceptdeliveryRequests/:requestId", deliveryRequestController.acceptDeliveryRequest);
Route.post("/deliverDeliveryRequest/:requestId", deliveryRequestController.deliverDeliveryRequest);

Route.get("/getAllwholesalerdeliveryRequestsbyagentid/:agentId", wholesaledealerorderRequestcontroller.getWholesalerDeliveryRequests);
Route.get("/deliveryRequestsbywholesaledealer/:wholesaledealerid", wholesaledealerorderRequestcontroller.deliveryRequestsbywholesaledealer);
Route.post("/rejectwholesaledealerdeliveryRequests/:requestId", wholesaledealerorderRequestcontroller.rejectwholesaledealerDeliveryRequest);
Route.post("/acceptwholesaledealerdeliveryRequests/:requestId", wholesaledealerorderRequestcontroller.acceptwholesaledealerDeliveryRequest);
Route.post("/deliverDeliveryRequestofwholesaledealer/:requestId", wholesaledealerorderRequestcontroller.deliverDeliveryRequestofwholesaledealer);

// wholesale product

Route.post("/add_product_bywholesale",wholesaledealerproductcontroller.upload,wholesaledealerproductcontroller.addProductByWholesaler)
Route.post("/view_a_product_bywholesale/:productId",wholesaledealerproductcontroller.viewProductBywholesalerId)
Route.post("/view_all_product_bywholesale",wholesaledealerproductcontroller.viewAllwholesaleProducts)
Route.post("/edit_a_product_bywholesale/:wholesaleproductId",wholesaledealerproductcontroller.upload,wholesaledealerproductcontroller.editProductBywholesalerId)
Route.post("/delete_a_product_bywholesale/:productId",wholesaledealerproductcontroller.deleteProductBywholesalerId)

//  wholesale cart

Route.post("/shopowneraddtocart",wholesaledealerCartcontroller.productaddtocart)
Route.post("/viewshopownercart/:shopowner",wholesaledealerCartcontroller.viewproductCartItems)
Route.post("/deleteitemfromshopownercart",wholesaledealerCartcontroller.productdeleteFromCart)

// wholesale  order
Route.post("/shopownerplaceorder",wholesaledealerordercontroller.shopownerplaceOrder)
Route.post("/vieworderswholesaledealerId/:wholesaledealerid",wholesaledealerordercontroller.viewOrdersBywholesaledealer)
Route.post("/acceptOrderRequestbywholesaler/:orderid",wholesaledealerordercontroller.wholesaleacceptOrderRequest)
Route.post("/viewOrdersByCustomerId/:customerId",wholesaledealerordercontroller.viewOrdersByshopowner)
Route.post("/wholesalerassignDeliveryAgent",WholesaleController.wholesalerassignDeliveryAgent)

module.exports=Route