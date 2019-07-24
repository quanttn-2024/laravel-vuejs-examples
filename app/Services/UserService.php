<?php

namespace App\Services;

use App\Repositories\User\UserRepositoryInterface;

/**
 * Class UserService
 *
 * @package App\Services
 */
class UserService
{
    /**
     * @var UserRepositoryInterface
     */
    private $userRepository;

    /**
    * UserService constructor
    *
    * @param UserRepositoryInterface $userRepository
    */
    public function __construct(
        UserRepositoryInterface $userRepository
    ) {
        $this->userRepository = $userRepository;
    }

    /**
     * Get list user
     *
     * @return mixed
     */
    public function getList()
    {
        $users = $this->userRepository->getAll();

        return $users;
    }
}
