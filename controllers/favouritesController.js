const Favourites = require("../models/favourites_model.js")

exports.toggle_favourite = async (req, res, next) => {

    console.log(req.body)

    //extract everything from the request and store them in variables
    const title = req.body.title.toLowerCase()
    const thumbnail = req.body.thumbnail.toLowerCase()
    const image = req.body.image.toLowerCase()
    const rating = req.body.rating
    const kcals = req.body.kcals
    const source = req.body.source.toLowerCase()
    const pros = req.body.pros
    const cons = req.body.cons
    const categories = req.body.categories
    const toggle_options = req.body.toggle_options
    const default_portion = req.body.default_portion

    try {

        const is_a_favourite = await Favourites.findOne({ title: title })//check if the food item is already in the favourites

        if (is_a_favourite) {

            const removed_from_favourites = await Favourites.findOneAndDelete({ title: title })

            if (removed_from_favourites) return res.status(200).json({ message: "Removed from favourites", title: title })

        }

        else {

            const favourite = new Favourites({

                title: title,
                thumbnail: thumbnail,
                image:image,
                rating: rating,
                kcals: kcals,
                source: source,
                pros: pros,
                cons: cons,
                categories: categories,
                toggle_options:toggle_options,
                default_portion:default_portion

            })

            const favourite_saved = await favourite.save()

            if (favourite_saved) return res.status(201).json({ message: "Added to favourites", title: title })
        }

    }

    catch (error) {

        return res.status(500).json({ message: "Something went wrong with our server" })

    }

}

exports.get_favourites = async (req, res, next) => {

    try {

        const favourites = await Favourites.find({})

        return res.status(200).json({ message: "Favourites retrieved", favourites: favourites })


    }

    catch (error) {
        return res.status(500).json({ message: "Something went wrong with our server" })
    }

}