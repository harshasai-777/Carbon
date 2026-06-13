import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DashboardView } from './DashboardView';
import { defaultFootprintInput } from '@/lib';

// Mock the lazy loaded chart components to keep testing fast and avoid JSDOM charting errors
vi.mock('@/components/charts/lazy', () => ({
  CategoryBarChart: () => <div data-testid="category-bar-chart">Bar Chart</div>,
  CategoryDonutChart: () => <div data-testid="category-donut-chart">Donut Chart</div>,
  HistoryTrendChart: () => <div data-testid="history-trend-chart">Trend Chart</div>,
}));

describe('DashboardView Component', () => {
  it('renders all metrics and cards correctly', () => {
    render(<DashboardView input={defaultFootprintInput} history={[]} />);

    // Check header section titles
    expect(screen.getByRole('heading', { name: /Where it comes from/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Track a goal/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Your highest-impact actions/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Your progress over time/i })).toBeInTheDocument();

    // Check default StatCard and ComparisonCard components
    expect(screen.getByText('Annual footprint')).toBeInTheDocument();
    expect(screen.getByText('Vs. 1.5°C target')).toBeInTheDocument();
    expect(screen.getByText('Vs. Global average')).toBeInTheDocument();

    // Verify mock charts are rendered
    expect(screen.getByTestId('category-bar-chart')).toBeInTheDocument();
    expect(screen.getByTestId('category-donut-chart')).toBeInTheDocument();
  });

  it('renders history trend chart when history entries are present', () => {
    const history = [
      { date: '2026-06-10T12:00:00.000Z', totalKg: 4200, totalTonnes: 4.2 },
      { date: '2026-06-11T12:00:00.000Z', totalKg: 3800, totalTonnes: 3.8 },
    ];
    render(<DashboardView input={defaultFootprintInput} history={history} />);

    expect(screen.getByTestId('history-trend-chart')).toBeInTheDocument();
  });

  it('renders a friendly placeholder when history is empty', () => {
    render(<DashboardView input={defaultFootprintInput} history={[]} />);

    expect(screen.getByText(/Recalculate periodically to build a trend line/i)).toBeInTheDocument();
  });
});
