import React from "react";
import { AlertTriangle } from "lucide-react";

interface DeleteConfirmationModalProps {
    isOpen: boolean;
    title?: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void;
    onCancel: () => void;
    isLoading?: boolean;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
    isOpen,
    title = "Delete Item",
    description = "Are you sure you want to delete this item? This action cannot be undone.",
    confirmText = "Delete",
    cancelText = "Cancel",
    onConfirm,
    onCancel,
    isLoading = false,
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 animate-in fade-in zoom-in-95 duration-200">

                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 mx-auto rounded-full bg-red-100 text-red-600 mb-4">
                    <AlertTriangle size={26} />
                </div>

                {/* Title */}
                <h2 className="text-lg font-semibold text-center text-gray-800">
                    {title}
                </h2>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-600 text-center">
                    {description}
                </p>

                {/* Buttons */}
                <div className="mt-6 flex gap-3">
                    <button
                        onClick={onCancel}
                        disabled={isLoading}
                        className="flex-1 py-2.5 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                    >
                        {cancelText}
                    </button>

                    <button
                        onClick={onConfirm}
                        disabled={isLoading}
                        className="flex-1 py-2.5 rounded-xl bg-red-600 text-white hover:bg-red-700 transition disabled:opacity-60"
                    >
                        {isLoading ? "Deleting..." : confirmText}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default DeleteConfirmationModal;
