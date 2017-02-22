GlobalConfigApiServer = {
    serverUrl: 'http://www.bigbug.tech:8080/hospital-appointment-api'
};
GlobalConfig = {
    /**
     * 数据请求类型
     */
    requestType: 'ajax',
    /**
     * 请求超时时间
     */
    requestTimeout: 1000 * 60 * 5,
    url: {
        api: {
            doctor:{
                recommend:GlobalConfigApiServer.serverUrl+'/api/doctor/recommend.json',
                specialityOfHospital:GlobalConfigApiServer.serverUrl+'/api/doctor/speciality\_of\_hospital.json',
                show:GlobalConfigApiServer.serverUrl+'/api/doctor/show.json',
                availableAppointment:GlobalConfigApiServer.serverUrl+'/api/doctor/available_appointment.json'
            },
            hospital:{
                show:GlobalConfigApiServer.serverUrl+'/api/hospital/all.json',
                getById:GlobalConfigApiServer.serverUrl+'/api/hospital/show.json'
            },
            service:{
                normalUserConfirmed:GlobalConfigApiServer.serverUrl+'/api/service/normaluserconfirmed.json',
                normalUserUnconfirmed:GlobalConfigApiServer.serverUrl+'/api/appointment_service/normal_user_unconfirmed.json',
            },
            patient:{
                show:GlobalConfigApiServer.serverUrl+'/api/patient/normal_user.json',
                update:GlobalConfigApiServer.serverUrl+'/api/patient/update.json',
                add:GlobalConfigApiServer.serverUrl+'/api/patient/add.json',
                remove:GlobalConfigApiServer.serverUrl+'/api/patient/remove.json'
            },
            pay:GlobalConfigApiServer.serverUrl+'/api/pingpp/charge_appointment.json',
            user:{
                register:GlobalConfigApiServer.serverUrl+'/api/normal_user/register.json',
                authenticate:GlobalConfigApiServer.serverUrl+'/api/normal_user/authenticate.json',
                changePassword:GlobalConfigApiServer.serverUrl+'/api/normal_user/change_password.json',
                show:GlobalConfigApiServer.serverUrl+'/api/normal_user/show.json',
                update:GlobalConfigApiServer.serverUrl+'/api/normal_user/update.json',
            },
            message:{
                sendRegister:GlobalConfigApiServer.serverUrl+'/api/sms/send_register_code.json',
                sendChangePassword:GlobalConfigApiServer.serverUrl+'/api/sms/send_change_password_code.json'
            },
            order:{
                create:GlobalConfigApiServer.serverUrl+'/api/appointment_order/create.json',
                normalUserPaid:GlobalConfigApiServer.serverUrl+'/api/appointment_order/normal_user_paid.json',
                normalUserUnpaid:GlobalConfigApiServer.serverUrl+'/api/appointment_order/normal_user_unpaid.json',
                appointmentOrder:GlobalConfigApiServer.serverUrl+'/api/appointment_order/pay.json'
            },
            ad:GlobalConfigApiServer.serverUrl+'/api/ad/recommend.json'
        }
    }
};