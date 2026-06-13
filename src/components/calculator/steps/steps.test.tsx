import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { RegionStep } from './RegionStep';
import { TransportStep } from './TransportStep';
import { FoodStep } from './FoodStep';
import { ConsumptionStep } from './ConsumptionStep';
import { defaultFootprintInput } from '@/lib';
import type { TransportInput, FoodInput, ConsumptionInput } from '../validation';


// Stateful wrapper for TransportStep to allow controlled input typing to work correctly
function TransportStepTestWrapper({
  initialValue,
  onChangeSpy,
}: {
  initialValue: TransportInput;
  onChangeSpy: (patch: Partial<TransportInput>) => void;
}) {

  const [val, setVal] = useState<TransportInput>(initialValue);
  return (
    <TransportStep
      value={val}
      errors={{}}
      onChange={(patch) => {
        setVal((prev) => ({ ...prev, ...patch }));
        onChangeSpy(patch);
      }}
    />
  );
}

describe('Calculator Form Step Components', () => {
  describe('RegionStep', () => {
    it('fires onChange callback when a region is selected', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<RegionStep value="UK" onChange={onChange} errors={{}} />);

      // Find the option for "United States" and select it
      const option = screen.getByLabelText(/United States/i);
      await user.click(option);

      expect(onChange).toHaveBeenCalledWith('US');
    });
  });

  describe('TransportStep', () => {
    it('fires onChange callback and updates input value when fields are changed', async () => {
      const user = userEvent.setup();
      const onChangeSpy = vi.fn();
      const value: TransportInput = { ...defaultFootprintInput.transport };

      render(<TransportStepTestWrapper initialValue={value} onChangeSpy={onChangeSpy} />);

      // Change car fuel type
      const carFuelSelect = screen.getByLabelText(/What do you drive\?/i);
      await user.selectOptions(carFuelSelect, 'electric');
      expect(onChangeSpy).toHaveBeenCalledWith({ carFuel: 'electric' });

      // Change distance driven
      const distanceInput = screen.getByLabelText(/Distance driven/i);
      await user.clear(distanceInput);
      await user.type(distanceInput, '250');
      expect(onChangeSpy).toHaveBeenLastCalledWith({ carKmPerWeek: 250 });
      expect(distanceInput).toHaveValue(250);

      // Change public transport distance
      const transitInput = screen.getByLabelText(/Public transport/i);
      await user.clear(transitInput);
      await user.type(transitInput, '120');
      expect(onChangeSpy).toHaveBeenLastCalledWith({ publicTransitKmPerWeek: 120 });
      expect(transitInput).toHaveValue(120);
    });
  });

  describe('FoodStep', () => {
    it('fires onChange callback when diet or food waste is changed', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      const value: FoodInput = defaultFootprintInput.food;

      render(<FoodStep value={value} onChange={onChange} errors={{}} />);

      // Select vegetarian diet
      const vegetarianRadio = screen.getByLabelText(/Vegetarian/i);
      await user.click(vegetarianRadio);
      expect(onChange).toHaveBeenCalledWith({ diet: 'vegetarian' });

      // Select high food waste
      const highWasteRadio = screen.getByLabelText(/High — frequent waste/i);
      await user.click(highWasteRadio);
      expect(onChange).toHaveBeenCalledWith({ foodWaste: 'high' });
    });
  });

  describe('ConsumptionStep', () => {
    it('fires onChange callback when shopping level or recycling is changed', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      const value: ConsumptionInput = defaultFootprintInput.consumption;

      render(<ConsumptionStep value={value} onChange={onChange} errors={{}} />);

      // Select minimal shopping
      const minimalRadio = screen.getByLabelText(/Minimal — only essentials/i);
      await user.click(minimalRadio);
      expect(onChange).toHaveBeenCalledWith({ shopping: 'minimal' });

      // Click recycling checkbox
      const recycleCheckbox = screen.getByLabelText(/I recycle consistently/i);
      await user.click(recycleCheckbox);
      expect(onChange).toHaveBeenCalledWith({ recycles: !value.recycles });
    });
  });
});
