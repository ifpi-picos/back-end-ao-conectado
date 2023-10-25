import Express from 'express';

const router = Express.Router();

router.get('/', (req, res) => {
  res.send('Get atendimentos.');
});

router.post('/', (req, res) => {
  res.send('Post atendimentos!');
});
router.put('/:id', (req, res) => {
  res.send('Put atendimentos!');
});
router.delete('/:id', (req, res) => {
  res.send('Delete atendimentos!');
});

export default router;
