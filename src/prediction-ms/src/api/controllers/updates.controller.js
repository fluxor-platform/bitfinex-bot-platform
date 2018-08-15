import express from 'express';
import IndicatorsService from '../../services/indicators.service';

const router = new express.Router();
const indicatorsService = new IndicatorsService();

router.post('/change', (req, res) => {
    indicatorsService.sendUpdate(req.body);
    res.json({
        status: 'received',
    });
});

router.post('/complete', (req, res) => {
    indicatorsService.sendComplete(req.body);
    res.json({
        status: 'received',
    });
});

export default router;
