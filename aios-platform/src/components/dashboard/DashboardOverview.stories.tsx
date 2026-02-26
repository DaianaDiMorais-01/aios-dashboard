import type { Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DashboardOverview } from './DashboardOverview';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false, staleTime: Infinity } },
});

function Wrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ height: '100vh', padding: 24, background: '#0f0f14' }}>
        <DashboardOverview />
      </div>
    </QueryClientProvider>
  );
}

const meta: Meta<typeof DashboardOverview> = {
  title: 'Dashboard/DashboardOverview',
  component: DashboardOverview,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Main dashboard page with tabbed sections: Overview, Agents, MCP & Tools, Costs, and System. Aggregates data from multiple API hooks to display charts, health indicators, and key metrics.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Wrapper />,
};

export const InNarrowContainer: Story = {
  render: () => (
    <QueryClientProvider client={queryClient}>
      <div style={{ height: '100vh', maxWidth: 600, padding: 16, background: '#0f0f14' }}>
        <DashboardOverview />
      </div>
    </QueryClientProvider>
  ),
};
