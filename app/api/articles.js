import { articles } from '../data/apiFetch';

export default function handler(req, res) {
  res.status(200).json(articles);
}
