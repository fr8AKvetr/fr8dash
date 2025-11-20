import { Activity } from '../types';

interface Props {
  activities: Activity[];
}

export default function RecentActivity({ activities }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
      <ul className="divide-y divide-gray-200">
        {activities.map((activity, i) => (
          <li key={i} className="py-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-900">{activity.type}</p>
                <p className="text-sm text-gray-500">{activity.description}</p>
              </div>
              <div className="text-right">
                <p className={`text-sm font-medium ${activity.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>
                  {activity.status}
                </p>
                <p className="text-sm text-gray-500">{new Date(activity.timestamp).toLocaleString()}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
