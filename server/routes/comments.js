const router = require('express').Router()
const passport = require('passport')
const Comment = require('../models/Comment')

router.route('/add')
    .post(
        passport.authenticate('jwt', { session: false }),
        (req, res) => {
            const text = req.body.text.trim()

            const newComment = new Comment({
                user: {
                    id: req.user.id,
                    login: req.user.login
                },
                text
            })

            newComment.save()
                .then(comment => res.json(comment))
                .catch(err => console.log(err))
})

router.route('/')
        .get((req, res) => {
            Comment.find()
                .sort({ createdAt: -1 })
                .then(comments => res.json(comments))
                .catch(err => console.log(err))
})

router.route('/following')
    .get(
        passport.authenticate('jwt', { session: false }),
        (req, res) => {
            Comment.find({
                'user.id': { $in: req.user.following }
            })
            .sort({ createdAt: -1 })
            .then(comments => res.json(comments))
            .catch(err => console.log(err))
})

router.route('/:userId')
    .get((req, res) => {
        Comment.find({ 'user.id': req.params.userId })
            .sort({ createdAt: -1 })
            .then(comments => res.json(comments))
            .catch(err => console.log(err))
})

module.exports = router