export interface KeysTable {
    [key: string]: OptionsKeysTable;
}

export interface OptionsKeysTable {
    labelHeader: string;
    labelValue?: string;
    capitalizeFirstLetter?: boolean;
}

export interface OptionsTable {
    actionsTable: {
        classStyleButtonMenuActions?: string;
        showAction?: {
            labelAction?: string;
            iconAction?: string;
        };
    }
    emptyTable: {
        title: string;
        subtitle?: string;
    }
    paginator: {
        perPage: Array<number>
        length: number;
        pageSize: number;
        pageIndex: number;
    }
    isLoadingContent?: boolean;
}