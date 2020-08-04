const PortionSize = require("../models/portion_size_model.js")

exports.set_portion_size = async (req, res, next) => {

    try {

        const food_item_exists = await PortionSize.findOne({title:req.body.title})

        if(!food_item_exists){

            const portion_details = new PortionSize({

                title:req.body.title,
                text:req.body.text,
                multiplier:req.body.multiplier

            })

            const saved = await portion_details.save()

            if(saved) return res.status(201).json({message:"portion preferences saved", details:{title:req.body.title, text:req.body.text, multiplier:req.body.multiplier}})
        }

        const portion_size_updated = await PortionSize.findOneAndUpdate({title:req.body.title}, {text:req.body.text, multiplier:req.body.multiplier})

        if(portion_size_updated) return res.status(201).json({message:"portion preferences saved", details:{title:req.body.title, text:req.body.text, multiplier:req.body.multiplier}})
    }

    catch (error) {

        return res.status(500).json({ message: "Something went wrong with our server" })

    }

}

exports.get_portion_size = async (req, res, next) => {

    try {

        const food_item = await PortionSize.findOne({ title: req.body.title })

        if (!food_item) return res.status(200).json({ message: "No portion size data for that item" })

        const portion_size_details = {title:food_item.title, text: food_item.text, multiplier: food_item.multiplier }

        return res.status(200).json({ message: "Portion size data retrieved", details: portion_size_details })

    }

    catch (error) {

        console.log(error)
        return res.status(500).json({ message: "Something went wrong with our server" })
    }

}