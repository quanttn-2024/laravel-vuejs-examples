<template>
    <div class="row">
        <div class="col-md-9">
            <form>
                <div class="box">
                    <div class="box-body">
                        <div class="form-group">
                            <label for="user-name" class="required">{{ $t('common.name') }}
                                <span class="require-input">*</span>
                            </label>
                            <div class="form-group">
                                <input type="text" class="form-control" id="user-name">
                                <span class="help-block"></span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="user-email">{{ $t('common.email') }}
                                <span class="require-input">*</span>
                            </label>
                            <div class="form-group">
                                <input type="text" class="form-control" id="user-description">
                                <span class="help-block"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

        <div class="col-md-3">
            <div class="box">
                <div class="box-header with-border"><i class="fa fa-save"></i>
                    <h3 class="box-title"> {{ $t('common.publish') }} </h3>
                </div>
                <div class="box-body" style="text-align: center;">
                    <button type="submit" class="btn btn-success btn-flat btn-format">
                        <i class="fa fa-check-circle"></i> &nbsp;
                        {{ $t('common.create') }}
                    </button>
                    <button type="submit" class="btn btn-primary btn-flat btn-format">
                        <i class="fa fa-backward"></i> &nbsp;
                        {{ $t('common.back') }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FormMember',
}
</script>
