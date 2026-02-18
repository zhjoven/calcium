import React, { forwardRef, useId, useState } from "react";
import Toggle from "@nocp/toggle";

import SeniorityPage from "@/views/seniority/SeniorityPage";

import Emitter from "@/utils/Emitter";
import type { PropsWithRef } from "@/types";
import Dialog from "@/components/Dialog";

interface SeniorityDialogProps extends PropsWithRef<Dialog> {
    
}

const SeniorityDialog: React.FC<SeniorityDialogProps> = forwardRef<Dialog, SeniorityDialogProps>(
    (props, ref) => {
        const [mode, setMode] = useState<'forward' | 'reverse'>('forward');

        const handleClose = () => {
            new Emitter().emit("seniority-dialog-close");
        };

        return (
            <Dialog
                title="辈分计算"
                className="seniority-dialog"
                id={"seniority-dialog--"+ useId()}
                onClose={() => handleClose()}
                ref={ref}
                footer={
                    <div className="seniority-mode-toggle">
                        <span>{mode === 'forward' ? '正向模式' : '反向模式'}</span>
                        <Toggle
                            defaultToggleValue={mode === 'reverse'}
                            onToggle={(checked) => setMode(checked ? 'reverse' : 'forward')}
                        />
                    </div>
                }>
                <SeniorityPage mode={mode} />
            </Dialog>
        );
    }
);

export default SeniorityDialog;
