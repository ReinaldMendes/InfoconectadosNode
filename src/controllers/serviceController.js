const Service = require('../models/Service');

// Criar um novo serviço
exports.createService = async (req, res) => {
    const { title, description, price, category, availability } = req.body;
    try {
        const service = new Service({
            title,
            description,
            price,
            category,
            availability,
            provider: req.user._id,
        });

        const createdService = await service.save();
        res.status(201).json(createdService);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obter todos os serviços
exports.getAllServices = async (req, res) => {
    try {
        const services = await Service.find({}).populate('provider', 'name email');
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obter um serviço específico por ID
exports.getServiceById = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id).populate('provider', 'name email');
        if (service) {
            res.json(service);
        } else {
            res.status(404).json({ message: 'Service not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Atualizar um serviço
exports.updateService = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (service) {
            service.title = req.body.title || service.title;
            service.description = req.body.description || service.description;
            service.price = req.body.price || service.price;
            service.category = req.body.category || service.category;
            service.availability = req.body.availability || service.availability;

            const updatedService = await service.save();
            res.json(updatedService);
        } else {
            res.status(404).json({ message: 'Service not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Excluir um serviço
exports.deleteService = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (service) {
            await service.remove();
            res.json({ message: 'Service removed' });
        } else {
            res.status(404).json({ message: 'Service not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
