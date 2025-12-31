/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import type React from 'react';
import { useInput } from 'ink';
import { ShellExecutionService } from '@google/gemini-cli-core';

interface Props {
  activePid?: number;
}

/**
 * A global input handler that listens for CTRL+b to background an active shell task.
 */
export const ShellBackgroundHandler: React.FC<Props> = ({ activePid }) => {
  useInput((input, _key) => {
    if (activePid && input === '\x02') {
      // CTRL+b
      ShellExecutionService.detach(activePid);
    }
  });

  return null;
};
