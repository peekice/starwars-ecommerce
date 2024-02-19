import Cookies from "js-cookie";


export const creatNewOrder = async (formData) => {
    try {
        const res = await fetch('/api/order/create-order',{
            method : 'POST',
            headers : {
                'Content-type' : 'application/json',
                Authorization : `Bearer ${Cookies.get('token')}`
            },
            body : JSON.stringify(formData)
        })

        const data = await res.json();
        return data;

    } catch (error) {
        console.log(error);
    }
};

export const getAllOrders = async (id) => {
    try {
        const res = await fetch(`/api/order/get-all-order?id=${id}`,{
            method : 'GET',
            headers : {
                'Content-type' : 'application/json',
                Authorization : `Bearer ${Cookies.get('token')}`
            }
        });

        const data = await res.json();
        return data;


    } catch (error) {
        console.log(error);
    }
};

export const getOrderDetails = async () => {
    try {
        const res = await fetch(`/api/order/order-detail?id=${id}`,{
            method : 'GET',
            headers : {
                'Content-type' : 'application/json',
                Authorization : `Bearer ${Cookies.get('token')}`
            }
        });

        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};