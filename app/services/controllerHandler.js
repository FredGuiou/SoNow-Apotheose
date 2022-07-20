const controller = {
    async Handler (req, res, next) {
        try {
            await controller.Handler(req, res, next);
        } catch (err) {
            next(err);
        }
    }
};

module.exports = controller;