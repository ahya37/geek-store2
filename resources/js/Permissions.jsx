import { usePage } from "@inertiajs/inertia-react";

export default function hasAnyPermission(permission) {

    // destruct auth from props
    const { auth }      = usePage().props

    // get permission from props
    let allPermissions  = auth.permission;

    let hasPermission   = false;

    permission.forEach(function (item) {
        if (allPermissions[item]) hasPermission = true
    });

    return hasPermission;
}
