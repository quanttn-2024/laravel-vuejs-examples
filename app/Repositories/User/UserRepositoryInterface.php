<?php

namespace App\Repositories\User;

use App\Repositories\RepositoryInterface;

/**
 * Interface UserRepositoryInterface
 *
 * @package App\Repositories\User
 */
interface UserRepositoryInterface extends RepositoryInterface
{
    /**
     * Get users all
     *
     * @return mixed
     */
    public function getAll();
}
