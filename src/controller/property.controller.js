const propertyModel = require("../models/property.model");

async function createPropertyController(req, res) {

    const { propertyTitle,
        propertyType,
        address,
        city,
        state,
        zipCode,
        monthlyRent,
        securityDeposit,
        availableFrom,
        bedrooms,
        bathrooms,
        area,
        floor,
        parking,
        petAllowed,
        balcony,
        airConditioning,
        laundry,
        elevator,
        utilitiesIncluded,
        furnished,
        description,
        ownerName,
        ownerEmail,
        ownerPhone }= req.body

        const property = await propertyModel.create({
            propertyTitle,
        propertyType,
        address,
        city,
        state, 
        zipCode,
        monthlyRent,
        securityDeposit,
        availableFrom,
        bedrooms,
        bathrooms,
        area,
        floor,
        parking,
        petAllowed,
        balcony,
        airConditioning,
        laundry,
        elevator,
        utilitiesIncluded,
        furnished,
        description,
        ownerName,
        ownerEmail,
        ownerPhone
        })

        res.status(201).json({
        message: "Property created successfully",
        property: property
    });

}

module.exports = {
    createPropertyController 
} 