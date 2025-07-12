import { useParams } from 'react-router-dom';

export default function ServiceDetails() {
  const { id } = useParams();
  return <div className="text-3xl text-red-600">🔍 Details for service ID: {id}</div>;
}